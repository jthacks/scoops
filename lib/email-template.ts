export function generateEmailHtml(data: any) {
  return `
    <h2>New Enquiry from ${data.name}</h2>
    <p><strong>Email:</strong> ${data.email}</p>
    <p><strong>Phone:</strong> ${data.phone}</p>
    <p><strong>Number of Dogs:</strong> ${data.number_of_dogs}</p>
    <p><strong>Visit Frequency:</strong> ${data.visit_frequency}</p>
    <p><strong>Dog Breeds:</strong> ${data.dog_breeds}</p>
    <p><strong>Garden Access:</strong> ${data.garden_access}</p>
    ${data.additional_notes ? `<p><strong>Additional Notes:</strong> ${data.additional_notes}</p>` : ''}
  `;
}