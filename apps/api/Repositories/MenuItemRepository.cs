using FoodUi.Api.Data;
using FoodUi.Api.Entities;
using Microsoft.EntityFrameworkCore;

namespace FoodUi.Api.Repositories;

public sealed class MenuItemRepository(FoodDbContext context) : IMenuItemRepository
{
    public async Task<IReadOnlyList<MenuItem>> GetAllAsync(CancellationToken cancellationToken = default)
    {
        return await context.MenuItems
            .AsNoTracking()
            .OrderBy(item => item.Category)
            .ThenBy(item => item.Name)
            .ToListAsync(cancellationToken);
    }

    public Task<MenuItem?> GetByIdAsync(Guid id, CancellationToken cancellationToken = default)
    {
        return context.MenuItems
            .AsNoTracking()
            .SingleOrDefaultAsync(item => item.Id == id, cancellationToken);
    }
}