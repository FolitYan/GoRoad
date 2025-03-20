using Domain.Models;

namespace Data.Repositories
{
    public interface IAccountRepository
    {
        Task Add(Guid id, string login, string password);
        List<Account> FindByLogin(string login);
        List<Account> FindByPassword(string paswword);
    }
}