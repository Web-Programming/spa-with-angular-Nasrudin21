import { Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule, Validators, FormBuilder } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})

  //Tugas : Implementasikan form kontak di Contact Component
  //Gunakan Reactive Forms dengan validasi untuk:
  //Nama (required, min 2 karakter)
  //Email (required, format email valid)
  //Pesan (required, min 10 karakter)
  //
  //Tambahkan metode submitContact() untuk menangani pengiriman form
  //
  //Tampilkan pesan sukses atau error berdasarkan hasil pengiriman
export class Contact {
  contactForm: FormGroup;
  successMessage: string = '';
  errorMessage: string = '';

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9+\s-]+$/)]],
      subject: ['', [Validators.required]],
      message: ['', [Validators.required, Validators.minLength(10)]],
      newsletter: [false]
    });
  }

  submitContact(): void {
    if (this.contactForm.valid) {
      const formData = this.contactForm.value;
      console.log('Contact form submitted', formData);
      
      // Simulasi sukses
      this.successMessage = 'Pesan Anda berhasil dikirim! Kami akan menghubungi Anda segera.';
      this.errorMessage = '';
      
      // Reset form setelah submit
      this.contactForm.reset();
      
      // Clear success message setelah 5 detik
      setTimeout(() => {
        this.successMessage = '';
      }, 5000);
      
      // TODO: Kirim ke backend API
      // this.http.post('http://localhost:3000/api/contact', formData).subscribe(...)
    } else {
      console.log('Form is not valid');
      this.errorMessage = 'Mohon lengkapi semua field dengan benar.';
      this.successMessage = '';
    }
  }

  resetForm(): void {
    this.contactForm.reset();
    this.successMessage = '';
    this.errorMessage = '';
  }
}