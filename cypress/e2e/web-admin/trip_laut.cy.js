describe('buat pengiriman laut', () => {
  //Author : Esmeralda Wangsa
  
  it('buat pengiriman laut', () => {
      // Langkah 1: Mengunjungi halaman web yang ingin ditest
      cy.visit('URL');
      
      // Langkah 2: Melakukan login dengan email dan password
      cy.get('input[placeholder="Silahkan masukan Email"]').type('email');
      cy.get('input[placeholder="Silahkan masukan Password"]').type('password');
      cy.get('button.MuiButton-containedPrimary').click();
      
      // Langkah 3: Menunggu halaman muncul setelah login
      cy.wait(7000);
      
      // Langkah 4: Mencari Pengiriman Laut
      cy.get('input[placeholder="Cari Page,ID Order,ID Trip"]').type('Pengiriman Laut{enter}');
      cy.wait(25000);
      
      // Langkah 5: Klik tombol untuk menambahkan pengiriman baru
      cy.get('button.css-19ea0rp').click();
      cy.contains('button.MuiButton-containedPrimary.css-d9qacf','Tambah Pengiriman').click();
      
      // Langkah 6: Mengisi ID Order yang akan dikirim
      cy.get('input[placeholder="Cari Id Order"]').type('ID Order{enter}');
      cy.wait(35000);
      cy.get('input[placeholder="Cari Id Order"].css-1ul1202').should('have.value', 'ID Order');
      cy.wait(2000);
      
      // Langkah 7: Memilih opsi untuk membuat trip dan melanjutkan
      cy.get('input.PrivateSwitchBase-input').check();
      cy.wait(1000);
      cy.contains('button.MuiButton-containedPrimary.css-d9qacf','Lanjutkan').click();
      cy.wait(5000);
      cy.contains('button.MuiButton-containedPrimary.css-d9qacf', 'Lanjutkan').click();
      cy.wait(30000);
      
      // Langkah 8: Memilih pengangkut dan membuat trip
      cy.contains('b', 'Nama Transporter').parents('div[style="display: flex; flex-direction: row; align-items: center; gap: 1rem;"]').click();
      cy.contains('button.MuiButton-containedPrimary.css-d9qacf','Buat Trip').click();
      cy.wait(1000);
      
      // Langkah 9: Konfirmasi pembuatan trip
      cy.contains('button.MuiButton-containedSuccess.css-d9qacf','Yakin').click();
  });
});
