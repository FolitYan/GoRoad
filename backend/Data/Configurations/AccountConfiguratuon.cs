using Data.Entietes;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Data.Configurations
{
    public class AccountConfiguratuon : IEntityTypeConfiguration<AccountEntity>
    {
        public void Configure(EntityTypeBuilder<AccountEntity> builder)
        {
            builder.HasKey(a => a.Id);

            builder.Property(a => a.Login)
                .IsRequired();

            builder.Property(a => a.Password)
                .IsRequired();

            // Связь с Post
            builder.HasMany(a => a.Posts)
                .WithOne(p => p.account)
                .HasForeignKey(p => p.accountId)
                .OnDelete(DeleteBehavior.Restrict); // Ограничиваем каскадное удаление
        }

    }
}
