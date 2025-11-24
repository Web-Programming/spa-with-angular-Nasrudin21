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
    ContactForm:FormGroup;


    constructor(private fb: FormBuilder) {
    
 this.ContactForm = this.fb.group({
  //Nama (required, min 2 karakter)
    nama: ['', [Validators.required, Validators.minLength(2)]],
    //Email (required, format email valid)
    email: ['', [Validators.required, Validators.email]],
    //Pesan (required, min 10 karakter)
    pesan: ['', [Validators.required, Validators.minLength(10)]],
  })
    }
  successMessage = '';
  errorMessage = '';

  //Tambahkan metode submitContact() untuk menangani pengiriman form
  submitContact() {
    this.successMessage = '';
    this.errorMessage = '';

    if (this.ContactForm.invalid) {
      this.errorMessage = 'Form tidak valid, periksa kembali input Anda.';
      return;
    }

    //Tampilkan pesan sukses atau error berdasarkan hasil pengiriman
    setTimeout(() => {
      this.successMessage = 'Pesan berhasil dikirim! Terima kasih telah menghubungi kami.';
      this.ContactForm.reset();
    }, 500);
  }
}
