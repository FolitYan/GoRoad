using Data.Repositories;
using Domain.Models;
using Infrastructure;

namespace Aplications.Services
{
    public class AccountService : IAccountService
    {
        private readonly IAccountRepository _accountRepository;
        private readonly IJWTProvider _jwtProvider;

        public AccountService(
            IAccountRepository accountRepository,
            IJWTProvider jwtProvider)
        {
            _accountRepository = accountRepository;
            _jwtProvider = jwtProvider;
        }

        public (string,bool) Registration(Guid id, string login, string password)
        {
            var res = _accountRepository.FindByLogin(login);
            if (res.Count()>0)
            {
                return ("Пользователь с таким логином уже есть",false);
            }

            var hash = BCrypt.Net.BCrypt.HashPassword(password); 
            _accountRepository.Add(id, login, hash); 
            return ("", true);
        }

        public (string, bool) Authentication(string login, string password)
        {
            var LoginRes = _accountRepository.FindByLogin(login).ToList();
            if (!LoginRes.Any())
            {
                return ("Пользователя с таким логином нет", false);
            }
            if (LoginRes.Count > 1)
            {
                return ("Найдено несколько пользователей с одинаковым логином", false);
            }
            if (BCrypt.Net.BCrypt.Verify(password, LoginRes[0].Passward))
            {
                var token = _jwtProvider.GenerateToken(LoginRes[0].Id);
                return (token, true);
            }
            return ("Неправильный пароль", false);

        }

        public (List<Account>, bool) GetAllAccounts()
        {
            var accounts = _accountRepository.ReturnAll();
            if (accounts.Count < 1)
            {
                return (accounts, false);
            }
            return (accounts, true);
        }
    }
}
