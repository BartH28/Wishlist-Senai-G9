using System;
using System.Collections.Generic;

#nullable disable

namespace wishlist_webAPI.Domains
{
    public partial class Desejo
    {
        public short IdDesejo { get; set; }
        public short? IdUsuario { get; set; }
        public string Descricao { get; set; }
        public DateTime? DataDesejo { get; set; }

        public virtual Usuario IdUsuarioNavigation { get; set; }
    }
}
