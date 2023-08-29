using System.ComponentModel.DataAnnotations;

namespace newcon_api.Models
{
    public class AttractionsModel
    {
        public int Id { get; set; }

        [Required(ErrorMessage = "O campo name é obrigatório.")]
        public string Name { get; set; } = "";

        [Required(ErrorMessage = "O campo description é obrigatório.")]
        [MaxLength(100, ErrorMessage = "O campo Descrição não pode ter mais de 100 caracteres.")]
        public string Description { get; set; } = "";

        [Required(ErrorMessage = "O campo adress é obrigatório.")]
        public string Adress { get; set; } = "";

        [Required(ErrorMessage = "O campo city é obrigatório.")]
        public string City { get; set; } = "";

        [Required(ErrorMessage = "O campo state é obrigatório.")]
        public string State { get; set; } = "";
    }
}
