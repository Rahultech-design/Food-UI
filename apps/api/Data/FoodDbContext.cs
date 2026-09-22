using FoodUi.Api.Entities;
using Microsoft.EntityFrameworkCore;

namespace FoodUi.Api.Data;

public sealed class FoodDbContext(DbContextOptions<FoodDbContext> options) : DbContext(options)
{
    public DbSet<MenuItem> MenuItems => Set<MenuItem>();

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<MenuItem>(entity =>
        {
            entity.HasKey(item => item.Id);
            entity.Property(item => item.Name).HasMaxLength(120).IsRequired();
            entity.Property(item => item.Description).HasMaxLength(500).IsRequired();
            entity.Property(item => item.Category).HasMaxLength(40).IsRequired();
            entity.Property(item => item.Price).HasPrecision(10, 2);
            entity.Property(item => item.Rating).HasPrecision(3, 2);
            entity.Property(item => item.PrepTime).HasMaxLength(30).IsRequired();
            entity.Property(item => item.Accent).HasMaxLength(20).IsRequired();
        });
    }
}