using FoodUi.Api.Entities;

namespace FoodUi.Api.Services;

public interface IMenuService
{
    Task<IReadOnlyList<MenuItem>> GetMenuAsync(CancellationToken cancellationToken = default);
    Task<MenuItem?> GetMenuItemAsync(Guid id, CancellationToken cancellationToken = default);
}