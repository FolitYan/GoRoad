using Aplications.Services;
using Data.Repositories;
using Domain.Models;
using Infrastructure;
using Microsoft.AspNetCore.Http;

namespace Applications.Services
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

        public (string, bool) Registration(Guid id, string login, string password)
        {
            var res = _accountRepository.FindByLogin(login);
            if (res.Any())
            {
                return ("Пользователь с таким логином уже существует", false);
            }

            var hash = BCrypt.Net.BCrypt.HashPassword(password);
            _accountRepository.Add(id, login, hash);
            return ("Регистрация успешна", true);
        }

        public (string, bool, List<Account>) Authentication(string login, string password, HttpContext context)
        {
            var loginRes = _accountRepository.FindByLogin(login).ToList();
            if (!loginRes.Any())
            {
                return ("Пользователя с таким логином нет", false, new List<Account>());
            }
            if (loginRes.Count > 1)
            {
                return ("Найдено несколько пользователей с одинаковым логином", false, new List<Account>());
            }
            if (BCrypt.Net.BCrypt.Verify(password, loginRes[0].Password))
            {
                var token = _jwtProvider.GenerateToken(loginRes[0].Id, context);

                return (token, true, loginRes);
            }
            return ("Неправильный пароль", false, new List<Account>());
        }

        public (List<Account>, bool) GetAllAccounts()
        {
            var accounts = _accountRepository.ReturnAll();
            return (accounts, accounts.Any());
        }

        public void LogOut(HttpContext context)
        {
            _jwtProvider.DeleteToken(context);
        }
    }
}
