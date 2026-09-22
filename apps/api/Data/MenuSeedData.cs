using FoodUi.Api.Entities;
using Microsoft.EntityFrameworkCore;

namespace FoodUi.Api.Data;

public static class MenuSeedData
{
    public static async Task SeedAsync(FoodDbContext context, CancellationToken cancellationToken = default)
    {
        if (await context.MenuItems.AnyAsync(cancellationToken))
        {
            return;
        }

        context.MenuItems.AddRange(
            new MenuItem
            {
                Id = Guid.Parse("a8a0a5dd-1e1b-47dc-96d4-1ca4a3a40501"),
                Name = "Harissa Chicken Bowl",
                Description = "Charred chicken, couscous, herbs, and lemon tahini.",
                Category = "Mains",
                Price = 16.50m,
                Rating = 4.90m,
                PrepTime = "15 min",
                Accent = "#e87743"
            },
            new MenuItem
            {
                Id = Guid.Parse("b3c3cbd2-63b8-4f8f-93ad-9ad4cb449502"),
                Name = "Green Goddess Salad",
                Description = "Crisp greens, avocado, toasted seeds, and basil dressing.",
                Category = "Fresh",
                Price = 12.00m,
                Rating = 4.80m,
                PrepTime = "10 min",
                Accent = "#87a878"
            });

        await context.SaveChangesAsync(cancellationToken);
    }
}