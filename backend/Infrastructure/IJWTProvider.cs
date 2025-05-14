using Microsoft.AspNetCore.Http;

namespace Infrastructure
{
    public interface IJWTProvider
    {
        string GenerateToken(Guid id, HttpContext context);

        void DeleteToken(HttpContext context);
    }
}