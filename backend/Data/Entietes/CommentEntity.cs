using Domain.Models;

namespace Data.Entietes
{
    public class CommentEntity
    {
        public Guid Id { get; set; }
        public string Text { get; set; }
        public AccountEntity Account { get; set; }
        public Guid AccountId { get; set; }
        public PostEntity Post { get; set; }
        public Guid PostId { get; set; }
    }
}
