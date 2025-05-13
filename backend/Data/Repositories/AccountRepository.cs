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
                Password = password,
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
                     Id = a.Id,
                     Login = a.Login,
                     Password = a.Password
                 })
                 .ToList();
        }

        public List<Account> FindAccount(string login, string password)
        {
            return _context.Accounts
                 .Where(x => x.Password == password && x.Login == login)
                 .Select(a => new Account
                 {
                     Login = a.Login,
                     Password = a.Password
                 })
                 .ToList();
        }

        public List<Account> ReturnAll()
        {
            return _context.Accounts
                .Select(a => new Account
                {
                    Id=a.Id,
                    Login = a.Login,
                    Password = a.Password
                })
                 .ToList();
        }
    }
}
