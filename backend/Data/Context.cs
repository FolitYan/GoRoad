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

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfiguration(new AccountConfiguratuon());
            modelBuilder.ApplyConfiguration(new PostConfiguratuon());

            base.OnModelCreating(modelBuilder);
        }

    }
}
