using FoodUi.Api.Entities;

namespace FoodUi.Api.Repositories;

public interface IMenuItemRepository
{
    Task<IReadOnlyList<MenuItem>> GetAllAsync(CancellationToken cancellationToken = default);
    Task<MenuItem?> GetByIdAsync(Guid id, CancellationToken cancellationToken = default);
}