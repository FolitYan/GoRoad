
using Domain.Models;

namespace Data.Entietes
{
    public class PostEntity
    {
        public Guid Id { get; set; }
        public string Description { get; set; } = string.Empty;
        public string Photo { get; set; } = string.Empty;
        public int Like { get; set; } = 0;
        public string Location { get; set; } = string.Empty; 
        public DateOnly Date { get; set; }

        public Guid accountId { get; set; }
        public AccountEntity? account { get; set; }

        public Guid collectionId { get; set; }
        public CollectionEntity? Collections { get; set; } = null;

        public List<string> Tags { get; set; }
        public List<CommentEntity>? Comments { get; set; }
    }
}
