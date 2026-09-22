using FoodUi.Api.Entities;
using FoodUi.Api.Services;

namespace FoodUi.Api.Controllers;

// Framework-neutral controller contract. A future ASP.NET host can map these methods to HTTP routes.
public sealed class MenuController(IMenuService menuService)
{
    public Task<IReadOnlyList<MenuItem>> GetMenuAsync(CancellationToken cancellationToken = default)
    {
        return menuService.GetMenuAsync(cancellationToken);
    }

    public Task<MenuItem?> GetMenuItemAsync(Guid id, CancellationToken cancellationToken = default)
    {
        return menuService.GetMenuItemAsync(id, cancellationToken);
    }
}