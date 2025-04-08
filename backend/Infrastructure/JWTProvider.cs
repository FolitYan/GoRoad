using Domain.Models;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace Infrastructure
{
    public class JWTProvider(IOptions<JWTOptions> options) : IJWTProvider 
    {
        private readonly JWTOptions _options = options.Value;

        public string GenerateToken(Guid Id)
        {
            Claim[] claims = [new("acountId", Id.ToString())];

            var signingCredentials = new SigningCredentials(
                new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_options.Key)),
                SecurityAlgorithms.HmacSha256);

            var token = new JwtSecurityToken(
                claims: claims,
                signingCredentials: signingCredentials);

            var tokenValue = new JwtSecurityTokenHandler().WriteToken(token);

            return tokenValue;
        }
    }
}
