using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO.tables
{
    class TNoteDTO
    {
        public int NoteId { get; set; }
        public Nullable<int> ProjectId { get; set; }
        public string Text { get; set; }
        public Nullable<int> StatusId { get; set; }

    }
}
