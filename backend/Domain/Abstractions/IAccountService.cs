﻿
using Domain.Models;

namespace Aplications.Services
{
    public interface IAccountService
    {
        (string, bool) Registration(Guid id, string login, string password);
        (string, bool) Authentication(string login, string password);
        (List<Account>, bool) GetAllAccounts();
    }
}
