export default {
  name: 'animal',
  title: 'Animales',
  type: 'document',
  fields: [
    {
      name: 'nombre',
      title: 'Nombre',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'URL (Slug)',
      type: 'slug',
      options: {
        source: 'nombre',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'imagen',
      title: 'Foto Principal',
      type: 'image',
      options: {
        hotspot: true, // Permite recortar la imagen
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'estado',
      title: 'Estado',
      type: 'string',
      options: {
        list: [
          { title: 'En Adopción', value: 'adopcion' },
          { title: 'Urgente', value: 'urgente' },
          { title: 'Reservado', value: 'reservado' },
          { title: 'Adoptado', value: 'adoptado' },
        ],
      },
      initialValue: 'adopcion',
    },
    {
      name: 'especie',
      title: 'Especie',
      type: 'string',
      options: {
        list: [
          { title: 'Perro', value: 'perro' },
          { title: 'Gato', value: 'gato' },
          { title: 'Otro', value: 'otro' },
        ],
        layout: 'radio', // Botones de radio en vez de lista
      },
      initialValue: 'perro',
    },
    {
      name: 'sexo',
      title: 'Sexo',
      type: 'string',
      options: {
        list: [
          { title: 'Macho', value: 'macho' },
          { title: 'Hembra', value: 'hembra' },
        ],
        layout: 'radio',
      },
    },
    {
      name: 'fechaNacimiento',
      title: 'Fecha de Nacimiento Aproximada',
      type: 'date',
    },
    {
      name: 'descripcion',
      title: 'Historia y Carácter',
      type: 'text', // Texto largo
      rows: 4,
    },
    {
      name: 'salud',
      title: 'Información Veterinaria (Vacunas, esterilización...)',
      type: 'string',
    },
    {
      name: 'causa',
      title: 'Recaudación para Tratamiento (Opcional)',
      description:
        'Rellena esto solo si el animal necesita una operación o tratamiento costoso.',
      type: 'object',
      fields: [
        {
          name: 'titulo',
          title: 'Título del tratamiento',
          type: 'string',
          placeholder: 'Ej: Operación de cadera',
        },
        {
          name: 'costeTotal',
          title: 'Coste Total (€)',
          type: 'number',
        },
        {
          name: 'recaudado',
          title: 'Dinero Recaudado (€)',
          type: 'number',
          initialValue: 0,
          description:
            'Irás actualizando esto manualmente conforme lleguen donaciones.',
        },
        {
          name: 'urgencia',
          title: '¿Es muy urgente?',
          type: 'boolean',
          initialValue: false,
        },
        {
          name: 'documentos',
          title: 'Facturas y Pruebas Médicas',
          description: 'Sube aquí los PDFs de las facturas o fotos de las radiografías para dar transparencia.',
          type: 'array',
          of: [
            { 
              type: 'file', 
              options: { accept: '.pdf' },
              title: 'Documento PDF' 
            }, 
            { 
              type: 'image',
              title: 'Imagen (Foto factura/Radiografía)' 
            }
          ]
        },
      ],
    },
  ],
}
