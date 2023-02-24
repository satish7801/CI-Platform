using System;
using System.Collections.Generic;

namespace CI_Platform.Models;

public partial class Skill
{
    public long SkillId { get; set; }

    public string? SkillName { get; set; }

    public byte Status { get; set; }

    public byte[] CreatedAt { get; set; } = null!;

    public DateTime? UpdatedAt { get; set; }

    public DateTime? DeletedAt { get; set; }

    public virtual ICollection<MissionSkill> MissionSkills { get; } = new List<MissionSkill>();

    public virtual ICollection<UserSkill> UserSkills { get; } = new List<UserSkill>();
}
