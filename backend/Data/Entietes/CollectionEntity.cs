namespace Data.Entietes
{
    public class CollectionEntity 
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public bool Private { get; set; } = false;
        public List<PostEntity>? Posts { get; set; } 
        public string? PhotoUrl { get; set; }
    }
}
