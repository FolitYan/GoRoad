 namespace Domain.Models
{
    public class Account
    {
        public Account(Guid id, string login, string passwоrd)
        {
            Id = id;
            Login = login;
            Password = passwоrd;
            Posts = new List<Post>();
        }
        public Account() { }

        public Guid Id { get; set; }
        public bool Role { get; set; } = false;
        public string Login { get; set; } = string.Empty;
        public string Password { get; set; } = string.Empty;
        public string Photo { get; set; } = string.Empty;
        public string About { get; set; } = string.Empty;
        public List<Account>? Following { get; set; }
        public List<Post>? Posts { get; set; }
        public List<Comment> Comments { get; set; }
    }
}
