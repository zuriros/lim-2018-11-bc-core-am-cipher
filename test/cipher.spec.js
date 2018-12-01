describe('cipher', () => {

  it('debería ser un objeto', () => {
    assert.equal(typeof cipher, 'object');
  });

  describe('cipher.encode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.encode, 'function');
    });

    it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offest 33',() =>{
      assert.equal(cipher.encode(33,"ABCDEFGHIJKLMNOPQRSTUVWXYZ"),"HIJKLMNOPQRSTUVWXYZABCDEFG")
    });
    it('debería retornar "def" para "abc" con offest 3',() =>{
      assert.equal(cipher.encode(3,"abc"),"def")
    });
    it('debería retornar " " cuando tu cipher sea ==32',() =>{
      assert.equal(cipher.encode(32," ")," ")
    });
  });

  describe('cipher.decode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.decode, 'function');
    });

    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offest 33',() =>{
      assert.equal(cipher.decode(33,"HIJKLMNOPQRSTUVWXYZABCDEFG"),"ABCDEFGHIJKLMNOPQRSTUVWXYZ")
    });
    it('debería retornar "abc" para "def" con offest 3',() =>{
      assert.equal(cipher.decode(3,"def"),"abc")
    });
    it('debería retornar " " cuando tu cipher sea ==32',() =>{
      assert.equal(cipher.decode(32," ")," ")
    });
  });

/*
  describe('cipher.createCipherWithOffset', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.createCipherWithOffset, 'function');
    });

    it('debería retornar un objeto con dos funciones (encode y decode) con offset fijado');

  });
  */

});
