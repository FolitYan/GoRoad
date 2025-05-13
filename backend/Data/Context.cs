using Data.Configurations;
using Data.Entietes;
using Microsoft.EntityFrameworkCore;

namespace Data
{
    public class Context : DbContext
    {
        public Context(DbContextOptions<Context> options) : base(options) { }

        public DbSet<AccountEntity> Accounts { get; set; }
        public DbSet<PostEntity> Posts { get; set; }
        public DbSet<CommentEntity> Comments { get; set; }
        public DbSet<CollectionEntity> Collections { get; set; }

        

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfiguration(new AccountConfiguratuon());
            modelBuilder.ApplyConfiguration(new PostConfiguratuon());
            modelBuilder.ApplyConfiguration(new CommentConfiguratuon());
            modelBuilder.ApplyConfiguration(new CollectionConfiguration()); 

            base.OnModelCreating(modelBuilder);
        }

    }
}
