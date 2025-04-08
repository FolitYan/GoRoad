 namespace Domain.Models
{
    public class Account
    {
        public Account(Guid id, string login, string passward)
        {
            Id = id;
            Login = login;
            Passward = passward;
            Posts = new List<Post>();
        }
        public Account() { }

        public Guid Id { get; set; }
        public string Login { get; set; } = string.Empty;
        public string Passward { get; set; } = string.Empty;
        public List<Post>? Posts { get; set; }
        public bool Role { get; set; } = false;

        public static (Account, string) Create(Guid id, string login, string passward)
        {
            string error = string.Empty;
            if (login == string.Empty)
            {
                error = "Empty login";
            }
            if (passward == string.Empty)
            {
                error = "Empty password";
            }
            var hash = BCrypt.Net.BCrypt.HashPassword(passward);

            Account account = new Account(id, login, hash);
            return (account, error);
        }
    }
}
