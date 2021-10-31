using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO.tables
{
    public class TProjectDTO
    {
        public int ProjectId { get; set; }
        public string ProjectName { get; set; }
        public Nullable<int> IdProfession { get; set; }
        public Nullable<bool> Status { get; set; }
        public Nullable<int> IdBeforeProject { get; set; }
    }
}
