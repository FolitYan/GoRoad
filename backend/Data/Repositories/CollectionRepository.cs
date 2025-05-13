using Domain.Models;

namespace Data.Repositories
{
    public class CollectionRepository
    {
        private readonly Context _context;
        public CollectionRepository(Context context) 
        {
            _context = context;
        }

        public bool Add(string name, bool _private, string photoUrl) 
        {
            var temp = new Collection
            {
                Id = Guid.NewGuid(),
                Name = name,
                PhotoUrl = photoUrl,
                Private = _private
            };
            _context.Add(temp);
            _context.SaveChanges();
            return true;
        }
    }
}
