using FoodUi.Api.Entities;
using FoodUi.Api.Repositories;

namespace FoodUi.Api.Services;

public sealed class MenuService(IMenuItemRepository menuItemRepository) : IMenuService
{
    public Task<IReadOnlyList<MenuItem>> GetMenuAsync(CancellationToken cancellationToken = default)
    {
        return menuItemRepository.GetAllAsync(cancellationToken);
    }

    public Task<MenuItem?> GetMenuItemAsync(Guid id, CancellationToken cancellationToken = default)
    {
        return menuItemRepository.GetByIdAsync(id, cancellationToken);
    }
}