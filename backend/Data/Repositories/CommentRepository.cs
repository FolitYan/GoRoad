using Data.Entietes;
using Domain.Models;
using Microsoft.Extensions.Hosting;

namespace Data.Repositories
{
    public class CommentRepository
    {
        private readonly Context _context;
        public CommentRepository(Context context) 
        {
            _context = context;
        }
        //public bool Add(Comment comment)
        
    }
}
