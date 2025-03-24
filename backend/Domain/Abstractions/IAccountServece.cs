
namespace Aplications.Services
{
    public interface IAccountServece
    {
        (string, bool) Registration(Guid id, string login, string password);
    }
}