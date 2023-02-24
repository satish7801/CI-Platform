﻿using System;
using System.Collections.Generic;

namespace CI_Platform.Models;

public partial class MissionDocument
{
    public long MissionDocumentId { get; set; }

    public long MissionId { get; set; }

    public string? DocumentName { get; set; }

    public string? DocumentType { get; set; }

    public string? DocumentPath { get; set; }

    public byte[] CreatedAt { get; set; } = null!;

    public DateTime? UpdatedAt { get; set; }

    public DateTime? DeletedAt { get; set; }

    public virtual Mission Mission { get; set; } = null!;
}
