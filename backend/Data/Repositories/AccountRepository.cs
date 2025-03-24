using Data.Entietes;
using Domain.Models;

namespace Data.Repositories
{
    public class AccountRepository : IAccountRepository
    {
        private readonly Context _context;
        public AccountRepository(Context context)
        {
            _context = context;
        }

        public async Task Add(Guid id, string login, string password)
        {
            var account = new AccountEntity
            {
                Id = id,
                Login = login,
                Passward = password,
                Role = false
            };
            await _context.AddAsync(account);
            await _context.SaveChangesAsync();
        }

        public List<Account> FindByLogin(string login)
        {
            return _context.Accounts
                 .Where(x => x.Login == login)
                 .Select(a => new Account
                 {
                     Login = a.Login,
                     Passward = a.Passward
                 })
                 .ToList();
        }

        public List<Account> FindByPassword(string paswword)
        {
            return _context.Accounts
                 .Where(x => x.Login == paswword)
                 .Select(a => new Account
                 {
                     Login = a.Login,
                     Passward = a.Passward
                 })
                 .ToList();
        }
    }
}
