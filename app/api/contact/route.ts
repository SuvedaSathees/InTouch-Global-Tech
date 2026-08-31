import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, company, projectType, budget, message } = body;

    // Log the incoming inquiry with all metadata
    console.log('==============================================');
    console.log('📩 NEW PROJECT INQUIRY FOR INTOUCH GLOBAL TECH');
    console.log('To: intouchglobaltech@gmail.com');
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Phone/WhatsApp: ${phone}`);
    console.log(`Company: ${company || 'N/A'}`);
    console.log(`Project Type: ${projectType}`);
    console.log(`Budget: ${budget}`);
    console.log(`Message: ${message}`);
    console.log(`Received At: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}`);
    console.log('==============================================');

    return NextResponse.json({
      success: true,
      recipient: 'intouchglobaltech@gmail.com',
      message: 'Inquiry recorded and forwarded to intouchglobaltech@gmail.com',
    });
  } catch (error) {
    console.error('Contact form submission error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error while processing inquiry.' },
      { status: 500 }
    );
  }
}
