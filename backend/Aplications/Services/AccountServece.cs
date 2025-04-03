using Data.Repositories;
using Domain.Models;

namespace Aplications.Services
{
    public class AccountServece : IAccountServece
    {
        private readonly IAccountRepository _accountRepository;
        public AccountServece(IAccountRepository accountRepository)
        {
            _accountRepository = accountRepository;
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
            var LoginRes = _accountRepository.FindByLogin(login);
            if (LoginRes.Count() < 0) {
                return ("Пользователя с таким логином нет", false);
            }
            var PasswordRes = _accountRepository.FindAccount(login, password);
            if (PasswordRes.Count() < 0)
            {
                return ("Неправильный пароль", false);
            }
            if (PasswordRes.Count() > 1)
            {
                return ("Слишком много пользователей с такими данными", false);
            }
            return ("",true);

        }
    }
}
