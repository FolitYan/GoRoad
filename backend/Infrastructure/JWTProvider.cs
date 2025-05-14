using Domain.Models;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Microsoft.AspNetCore.Http;

namespace Infrastructure
{
    public class JWTProvider(IOptions<JWTOptions> options) : IJWTProvider
    {
        private readonly JWTOptions _options = options.Value;

        public string GenerateToken(Guid id, HttpContext context)
        {
            Claim[] claims = [new Claim("accountId", id.ToString())];

            var signingCredentials = new SigningCredentials(
                new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_options.Key)),
                SecurityAlgorithms.HmacSha256);

            var token = new JwtSecurityToken(
                expires: DateTime.UtcNow.AddHours(1), // Добавил срок действия токена
                claims: claims,
                signingCredentials: signingCredentials);

            var tokenValue = new JwtSecurityTokenHandler().WriteToken(token);

            // Устанавливаем cookie с безопасными параметрами
            context.Response.Cookies.Append("chocolate-cookie", tokenValue, new CookieOptions
            {
                HttpOnly = true,
                Secure = true,
                SameSite = SameSiteMode.None // Настроить в зависимости от требований
            });


            return tokenValue;
        }

        public void DeleteToken(HttpContext context)
        {
            context.Response.Cookies.Delete("chocolate-cookie");
        }
    }
}
