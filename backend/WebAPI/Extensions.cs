using Infrastructure;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using System.Text;

namespace WebAPI
{
    public static class Extensions
    {
        public static void AddApiAuthentication(
            this IServiceCollection services, 
            IOptions<JWTOptions> jwtOptions)
        {
            services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
                .AddJwtBearer(options =>
                {
                    options.TokenValidationParameters = new TokenValidationParameters
                    {
                        ValidateIssuer = false,
                        ValidateAudience = false,
                        ValidateLifetime = false,
                        ValidateIssuerSigningKey = true,
                        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(jwtOptions.Value.Key))
                    };

                    options.Events = new JwtBearerEvents
                    {
                        OnMessageReceived = context =>
                        {
                            context.Token = context.Request.Cookies["chocolate-cookie"];
                            return Task.CompletedTask;
                        }
                    };
                });


            services.AddAuthorization();
        }
    }
}
