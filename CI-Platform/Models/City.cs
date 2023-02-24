using System;
using System.Collections.Generic;

namespace CI_Platform.Models;

public partial class City
{
    public long CityId { get; set; }

    public long? CountryId { get; set; }

    public string Name { get; set; } = null!;

    public byte[] CreatedAt { get; set; } = null!;

    public DateTime? UpdatedAt { get; set; }

    public DateTime? DeletedAt { get; set; }

    public virtual Country? Country { get; set; }

    public virtual ICollection<Mission> Missions { get; } = new List<Mission>();

    public virtual ICollection<User> Users { get; } = new List<User>();
}
