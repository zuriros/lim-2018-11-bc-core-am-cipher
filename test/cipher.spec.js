describe('cipher', () => {

  it('debería ser un objeto', () => {
    assert.equal(typeof cipher, 'object');
  });

  describe('cipher.encode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.encode, 'function');
    });

    it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offest 33',() =>{
      assert.equal(cipher.encode("ABCDEFGHIJKLMNOPQRSTUVWXYZ",33),"HIJKLMNOPQRSTUVWXYZABCDEFG")
    });
    it('debería retornar "def" para "abc" con offest 3',() =>{
      assert.equal(cipher.encode("abc",3),"def")
    });
    it('debería retornar " " cuando tu cipher sea ==32',() =>{
      assert.equal(cipher.encode(" ",32)," ")
    });
  });

  describe('cipher.decode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.decode, 'function');
    });

    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offest 33',() =>{
      assert.equal(cipher.decode("HIJKLMNOPQRSTUVWXYZABCDEFG",33),"ABCDEFGHIJKLMNOPQRSTUVWXYZ")
    });
    it('debería retornar "abc" para "def" con offest 3',() =>{
      assert.equal(cipher.decode("def",3),"abc")
    });
    it('debería retornar " " cuando tu cipher sea ==32',() =>{
      assert.equal(cipher.decode(" ",32)," ")
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
