﻿using Data.Repositories;
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
            var rez = _accountRepository.FindByLogin(login);
            if (rez.Count()>0)
            {
                return ("Пользователь с таким логином уже есть",false);
            }
            var (account, error ) = Account.Create(id, login, password);
            if (error.Count() > 0)
            {
                return (error,false);
            }
            _accountRepository.Add(id, login, account.Passward); 
            return ("", true);
        }
    }
}
