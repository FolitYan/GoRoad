using System.Security.Principal;

namespace Data.Entietes
{
    public class AccountEntity
    {
        public Guid Id { get; set; }
        public bool Role { get; set; } = false;
        public string Login { get; set; } = string.Empty;
        public string Password { get; set; } = string.Empty;
        public string Photo {  get; set; } = string.Empty;
        public string About {  get; set; } = string.Empty;
        public List<AccountEntity>? Following { get; set; }
        public List<PostEntity>? Posts { get; set; }
        public List<CommentEntity> Comments { get; set; }
    }
}
