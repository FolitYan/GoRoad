namespace Domain.Models
{
    public class Comment
    {
        public Guid Id { get; set; }
        public string Text { get; set; }

        public Account Account { get; set; }
        public Guid AccountId { get; set; }

        public Post Post { get; set; }
        public Guid PostId { get; set; }
    }
}
