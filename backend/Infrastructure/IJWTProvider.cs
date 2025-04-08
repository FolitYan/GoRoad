using Domain.Models;

namespace Infrastructure
{
    public interface IJWTProvider
    {
        string GenerateToken(Guid Id);
    }
}