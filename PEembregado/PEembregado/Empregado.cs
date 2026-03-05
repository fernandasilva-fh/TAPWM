using System;

namespace PEembregado
{
    internal abstract class Empregado
    {
        private int matricula;
        private string nomEmpregado;
        private DateTime dataEntradaEmpresa;

        public int Matricula
        {
            get => matricula;
            set => matricula = value;
        }

        public string NomEmpregado
        {
            get => nomEmpregado;
            set => nomEmpregado = value;
        }

        public DateTime DataEntradaEmpresa
        {
            get => dataEntradaEmpresa;
            set => dataEntradaEmpresa = value;
        }

        public virtual int TempoTrabalho()
        {
            TimeSpan span = DateTime.Today.Subtract(DataEntradaEmpresa);
            return span.Days;
        }

        public abstract double SalarioBruto();
    }
}