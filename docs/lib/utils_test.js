
  describe("Radar", function() {
    describe("Cartesian to Raster Co-ordinate Transformation functions", function() {
      it("cartesian_to_raster_origin", function() {
        expect(cartesian_to_raster(0,0)).toEqual([w/2,h/2]);
      });
      
      it("cartesian_to_raster_bounds", function() {
        expect(cartesian_to_raster(-500,-500)).toEqual([0,0]);
        expect(cartesian_to_raster(500,500)).toEqual([w,h]);
        expect(cartesian_to_raster(-500,500)).toEqual([0,h]);
        expect(cartesian_to_raster(500,0)).toEqual([w,h/2]);
      });
    });  
    
    describe("Polar to Cartesian Co-ordinate Transformation functions", function() {

      it("polar origin ", function() {
        var r = 0, t = 0;
        expect(Math.round(polar_to_cartesian(r,t)[0])).toEqual(0);
        expect(Math.round(polar_to_cartesian(r,t)[1])).toEqual(0);
      });

      it("polar to cartesian 1,90", function() {
        var r = 1, t = 90;
        expect(Math.round(polar_to_cartesian(r,t)[0])).toEqual(0);
        expect(Math.round(polar_to_cartesian(r,t)[1])).toEqual(1);
          });

      it("polar to cartesian 20,90", function() {
        var r = 20;
        var t = 90;
        expect(Math.round(polar_to_cartesian(r,t)[0])).toEqual(0);
        expect(Math.round(polar_to_cartesian(r,t)[1])).toEqual(r);
      });

      it("polar to cartesian 20, 180", function() {
        var r = 20, t = 180;
        expect(Math.round(polar_to_cartesian(r,t)[0])).toEqual(-20);
        expect(Math.round(polar_to_cartesian(r,t)[1])).toEqual(0);
      });

      it("polar to cartesian, 20, 270", function() {
        var r = 20, t = 270;
        expect(Math.round(polar_to_cartesian(r,t)[0])).toEqual(0);
        expect(Math.round(polar_to_cartesian(r,t)[1])).toEqual(-20);
      });

    });  

    describe("Raster to Cartesian Co-ordinate Transformation functions", function() {
      it("Raster to cartesian", function() {
        expect(raster_to_cartesian(0,0)).toEqual([-500,-500]);
        expect(raster_to_cartesian(1000,1000)).toEqual([500,500]);
    });
            
  });   
});   
  jasmine.getEnv().addReporter(new jasmine.TrivialReporter());;
  jasmine.getEnv().execute();
