namespace FoodUi.Api.Entities;

public sealed class MenuItem
{
    public Guid Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
    public string Category { get; set; } = string.Empty;
    public decimal Price { get; set; }
    public decimal Rating { get; set; }
    public string PrepTime { get; set; } = string.Empty;
    public string Accent { get; set; } = string.Empty;
}