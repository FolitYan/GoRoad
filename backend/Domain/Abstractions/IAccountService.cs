
using Domain.Models;
using Microsoft.AspNetCore.Http;

namespace Aplications.Services
{
    public interface IAccountService
    {
        (string, bool) Registration(Guid id, string login, string password);
        (string, bool, List<Account>) Authentication(string login, string password, HttpContext context); 
        (List<Account>, bool) GetAllAccounts();
        void LogOut(HttpContext context);
    }
}
