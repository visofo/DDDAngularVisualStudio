﻿using Sesc.Cultura.Domain.Interfaces;
using System;
using System.ComponentModel.DataAnnotations;

namespace Sesc.Cultura.Domain.Models
{
    public class AuditableEntity : IAuditableEntity
    {
        [MaxLength(256)]
        public string CreatedBy { get; set; }

        [MaxLength(256)]
        public string UpdatedBy { get; set; }

        public DateTime UpdatedDate { get; set; }
        public DateTime CreatedDate { get; set; }
    }
}