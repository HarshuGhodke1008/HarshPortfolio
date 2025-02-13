from flask import Flask, render_template, request, flash, send_from_directory
import logging
import os

# Configure logging
logging.basicConfig(level=logging.DEBUG)

app = Flask(__name__)
app.secret_key = "portfolio_secret_key"  # Required for flash messages

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/contact', methods=['POST'])
def contact():
    if request.method == 'POST':
        name = request.form.get('name')
        email = request.form.get('email')
        message = request.form.get('message')
        
        # Here you would typically send an email or store the contact form data
        # For now, we'll just log it and show a success message
        logging.info(f"Contact form submission from {name} ({email}): {message}")
        flash('Thank you for your message! I will get back to you soon.', 'success')
        
    return render_template('index.html')

@app.route('/static/assets/<path:filename>')
def serve_resume(filename):
    return send_from_directory('static/assets', filename)

if __name__ == '__main__':
    app.run(debug=True)